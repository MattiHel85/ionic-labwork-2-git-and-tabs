import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/LinkedIn';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Git & Tabs: Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Git & Tabs: Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Git & Tabs: Home" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
