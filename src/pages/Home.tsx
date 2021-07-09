import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import { Button } from '../components/Button';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import demoImg from '../assets/images/demo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { PageAuth } from '../styles/auth';

export function Home(): JSX.Element {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error('A sala não existe', {
        position: 'top-right',
      });
      return;
    }

    if (roomRef.val().closedAt) {
      toast.error('A sala já foi fechada', {
        position: 'top-right',
      });
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <PageAuth id="page-auth">
      <aside>
        <picture>
          <source media="(min-width: 860px)" srcSet={illustrationImg} />
          <source media="(min-width: 100px) and (max-width: 860px)" srcSet={demoImg} />

          <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        </picture>
        <div>
          <strong>Crie salas Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo real</p>
        </div>
      </aside>
      <main>
        <div className="main-content">
          <ThemeSwitcher />
          <img src={logoImg} alt="Letmeask" />
          <button
            type="button"
            onClick={handleCreateRoom}
            className="create-room"
          >
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">
            ou entre em uma sala
          </div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </PageAuth>
  );
}
