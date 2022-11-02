import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button'

function App() {
  const data ={
    name: 'Oluwaseyi Odunaike',
    image: "https://github.com/Oluwaseyi-dev.png",
    bio: 'Founder',
    links: [
      {
        name: "My open source Github",
        url: "https://github.com/Oluwaseyi-dev",
        icon: "github",
      },
      {
        name: "follow me on twitter",
        url: "http://twitter.com/playboylag",
        icon: "twitter",
      },
    ],
  };
  return (
    <div className="p-m-4">
      <div className="p-d-flex p-jc-center p-ai-center">
        <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
        <h1 className="p-m-2">{data.name}</h1>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <p>{data.bio}</p>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <button></button>
      </div>
    </div>
  );
}

export default App;
