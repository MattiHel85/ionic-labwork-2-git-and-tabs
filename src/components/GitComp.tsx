import './GitComp.css';

interface ContainerProps {
  name: string;
}

const GitComp: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Just for the sake of adding another link... Here is my <a target="_blank" rel="noopener noreferrer" href="https://github.com/MattiHel85">GitHub</a></p>
    </div>
  );
};

export default GitComp;
