import { useSessionStore } from '@/entities/session';

export const Profile = () => {
  const session = useSessionStore((s) => s.session);

  return (
    <div className="profile">
      <span className="profile__name">{session?.username}</span>
      <button className="button profile__logout-button">
        <i className="bi bi-box-arrow-right"></i>
      </button>
    </div>
  );
};
