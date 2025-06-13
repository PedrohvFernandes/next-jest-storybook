import { User } from '@/types/user';
import { Button } from '../../button';


export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="flex justify-between items-center border-b border-black/10 py-4 px-5 font-sans">
      <div className="flex items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block align-top"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="var(--background)"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="var(--primary-default)"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="var(--tertiary-default)"
            />
          </g>
        </svg>
        <h1 className="inline-block align-top ml-2 my-[6px] font-bold text-[20px] leading-none">Acme</h1>
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <span className="mr-2 text-neutral-text text-sm">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" className="ml-2" />
          </>
        )}
      </div>
    </div>
  </header>
);
