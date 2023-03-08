import './AboutComp.css';

interface ContainerProps {
  name: string;
}

const AboutComp: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        This Ionic App was made as part of my studies @Laurea AMK in Espoo, Finland.
      </p>
    </div>
  );
};

export default AboutComp;
