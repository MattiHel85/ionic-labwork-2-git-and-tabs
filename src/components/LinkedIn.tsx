import './LinkedIn.css';

interface ContainerProps {
  name: string;
}

const LinkedIn: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>This is the first tab. Not much to see yet so check out my <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matt-simpson-finland/">LinkedIn</a></p>
    </div>
  );
};

export default LinkedIn;
