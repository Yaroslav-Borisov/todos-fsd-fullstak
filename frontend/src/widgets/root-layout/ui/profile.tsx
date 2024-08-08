import { useSessionStore } from '@/entities/session';
import { useSignOut } from '@/features/sign-out';

export const Profile = () => {
  const session = useSessionStore((s) => s.session);
  const signOut = useSignOut();

  return (
    <div className="profile">
      <span className="profile__name">{session?.username}</span>
      <button className="button profile__logout-button" onClick={signOut}>
        <i className="bi bi-box-arrow-right"></i>
      </button>
    </div>
  );
};
