import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AboutComp from '../components/AboutComp';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Git & Tabs: About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Git & Tabs: About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AboutComp name="Git & Tabs: About" />
      </IonContent>
    </IonPage>
  );
};

export default About;
