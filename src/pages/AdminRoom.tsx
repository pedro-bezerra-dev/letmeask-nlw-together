import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { useRoom } from '../hooks/useRoom';
import { useAuth } from '../hooks/useAuth';

import { database } from '../services/firebase';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';

import '../styles/room.scss';

type RoomParms = {
  id: string;
}

export function AdminRoom(): JSX.Element {
  const history = useHistory();
  const params = useParams<RoomParms>();
  const roomId = params.id;
  const { title, questions, authorId } = useRoom(roomId);
  const { user } = useAuth();

  async function handleDeleteQuestion(questionId: string) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    toast.success('The room was successfully closed', {
      position: 'top-right',
    });

    history.push('/');
  }

  async function handleCheckQuestionAsAnswer(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighLightQuestion(questionId: string) {
    const questionRef = database.ref(`rooms/${roomId}/questions/${questionId}`);

    questionRef.once('value', async (question) => {
      const questionIsHighLighted = question.val().isHighLighted;

      if (questionIsHighLighted) {
        await questionRef.update({
          isHighLighted: false,
        });
      } else {
        await questionRef.update({
          isHighLighted: true,
        });
      }
    });
  }

  return (
    <>
      {user?.id === authorId && (
        <>
          <div id="page-room">
            <header>
              <div className="content">
                <img src={logoImg} alt="Logo" />
                <div>
                  <RoomCode code={roomId} />
                  <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                </div>
              </div>
            </header>

            <main>
              <div className="room-title">
                <h1>
                  Sala
                  {' '}
                  {title}
                </h1>
                { questions.length > 0 && (
                <span>
                  {questions.length}
                  {' '}
                  pergunta(s)
                </span>
                )}
              </div>

              <div className="questions-list">
                {questions.map((question) => (
                  <Question
                    key={question.id}
                    content={question.content}
                    author={question.author}
                    isAnswered={question.isAnswered}
                    isHighLighted={question.isHighLighted}
                  >
                    {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleCheckQuestionAsAnswer(question.id)}
                      >
                        <img src={checkImg} alt="Marccar pergunta como respondida" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighLightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Dar destaque à pergunta" />
                      </button>
                    </>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDeleteQuestion(question.id)}
                    >
                      <img src={deleteImg} alt="Remover pergunta" />
                    </button>
                  </Question>
                ))}
              </div>
            </main>
          </div>
        </>
      )}

      { user?.id !== authorId && (
        <>
          <div id="page-room" className="blocked">
            <main>
              <img src={logoImg} alt="Logo" />
              <p>Sinto muito, você não é o adiministrador da sala</p>
              <Button onClick={() => history.goBack()}>Voltar</Button>
            </main>
          </div>
        </>
      )}

    </>
  );
}
