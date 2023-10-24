import styles from './web-services.module.css';

/* eslint-disable-next-line */
export interface WebServicesProps {}

export function WebServices(props: WebServicesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebServices!</h1>
    </div>
  );
}

export default WebServices;
