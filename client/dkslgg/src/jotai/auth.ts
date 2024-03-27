// jotai
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';
// Service
import { getMember, reAccessToken } from '../services/UserService';

const getAuth = async () => {
  const token = {
    access: sessionStorage.getItem('accessToken'),
    refresh: localStorage.getItem('refreshToken'),
  };

  if (token.access) {
    const reAuth = await getMember();

    if (reAuth != undefined && reAuth.status == 200) return reAuth.data;
  }

  if (token.refresh) {
    const reAccess = await reAccessToken(token.refresh);

    if (reAccess != undefined && reAccess.status == 200) {
      sessionStorage.setItem('accessToken', reAccess.data);

      const reAuth = await getMember();
      if (reAuth != undefined && reAuth.status == 200) return reAuth.data;
    }
  }

  return null;
};

const authAtom = atomWithDefault(getAuth);

const updateAuthAtom = atom(null, async (_get, set) => {
  set(authAtom, await getAuth());
});

export const useUpdateAuth = () => useSetAtom(updateAuthAtom);

export const useAuth = () => useAtomValue(authAtom);
