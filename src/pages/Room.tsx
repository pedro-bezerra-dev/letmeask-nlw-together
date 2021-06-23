import { useState, FormEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'

import logoImg from '../assets/images/logo.svg';

import '../styles/room.scss';
import { database } from '../services/firebase';

type FirebaseQuestionsType = Record<string, {
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  isHighLighted: string,
  isAnswered: string,
}>

type QuestionsType = {
  id: string;
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  isHighLighted: string,
  isAnswered: string,
}

type RoomParms = {
  id: string;
}

export function Room() {
  const { user } = useAuth()
  const params = useParams<RoomParms>()
  const [newQuestion, setNewQuestion] = useState('')
  const [questions, setQuestions] = useState<QuestionsType[]>([])
  const [title, setTitle] = useState('')

  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestionsType = databaseRoom.questions ?? {}

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighLighted: value.isHighLighted,
          isAnswered: value.isAnswered,
        }
      })

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })
  }, [roomId])

  async function handleNewQuestion(event: FormEvent) {
    event.preventDefault()

    if(newQuestion.trim() === '') {
      return
    }

    if(!user) {
      throw new Error('You must logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighLighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)

    setNewQuestion('')
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="" />
          <RoomCode code={roomId}/>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <form onSubmit={handleNewQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          ></textarea>

          <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>Para enviar sua pergunta, <button>faça seu login</button>.</span>
            ) }
            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}