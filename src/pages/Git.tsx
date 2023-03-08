import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GitComp from '../components/GitComp';
import './Git.css';

const Git: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Git & Tabs: Git</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"> Git & Tabs: Git</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GitComp name="Git & Tabs: Git" />
      </IonContent>
    </IonPage>
  );
};

export default Git;
