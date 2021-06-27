import { useEffect, useState } from 'react';

import { useAuth } from './useAuth';

import { database } from '../services/firebase';

type QuestionsType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isHighLighted: boolean;
  isAnswered: boolean;
  likeCount: number;
  likeId: string | undefined;
}

type FirebaseQuestionsType = Record<string, {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isHighLighted: boolean;
  isAnswered: boolean;
  likes: Record<string, {
    authorId: string;
  }>
}>

type UseRoomType = {
  questions: QuestionsType[];
  title: string;
  authorId: string;
}

export function useRoom(roomId: string): UseRoomType {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionsType[]>([]);
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestionsType = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => ({
        id: key,
        content: value.content,
        author: value.author,
        isHighLighted: value.isHighLighted,
        isAnswered: value.isAnswered,
        likeCount: Object.values(value.likes ?? {}).length,
        // eslint-disable-next-line max-len, @typescript-eslint/no-unused-vars, no-shadow
        likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
      }));

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
      setAuthorId(databaseRoom.authorId);

      return () => {
        roomRef.off('value');
      };
    });
  }, [roomId, user?.id]);

  return { questions, title, authorId };
}
