import React from 'react';
import '../css/Team.css'; 
import Footer from '../components/Footer';  
import NavBar from '../components/NavBar';

const teamMembers = [
    {
      id: 1,
      name: 'Adriana Zys',
      position: 'CEO',
      description: '',
      photo: 'https://images.unsplash.com/photo-1586084204280-7c1e7f9f9e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGh1bWFuJTIwYXBvbGxvJTIwcG90b2dyYWZpbHxlbnwwfHx8fDE2OTAyMjQ4MDA&ixlib=rb-4.0.3&q=80&w=100',
    },
    {
      id: 2,
      name: 'Gustavo',
      position: 'Designer',
      description: 'Criando experiências incríveis',
      photo: 'https://images.unsplash.com/photo-1543298593-2d3b4a5d9d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE4fHxob21lJTIwcGVyc29uYWwlMjBpbWFnZXxlbnwwfHx8fDE2OTAyMjQ4MTQ&ixlib=rb-4.0.3&q=80&w=100',
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      position: 'Gerente de Projetos',
      description: 'Gerenciando equipes e projetos',
      photo: 'https://images.unsplash.com/photo-1573497019413-646067c9cfd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHx3b21hbiUyMHBob3RvfGVufDB8fHx8MTY5MDIyNDgxOQ&ixlib=rb-4.0.3&q=80&w=100',
    },
    {
      id: 4,
      name: 'Ana Pereira',
      position: 'Desenvolvedora Backend',
      description: 'Focada em APIs e banco de dados',
      photo: 'https://images.unsplash.com/photo-1513271267782-0c13e8a84b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMGltYWdlfGVufDB8fHx8MTY5MDIyNDg1Ng&ixlib=rb-4.0.3&q=80&w=100',
    },
  ];
  

const Team = () => {
  return (
    <div>
        <NavBar />

        <section className="py-3 py-md-5">
        <div className="container">
            <div className="team-container">
                <div className="team-div">
                    <h1>Conheça Nossa Equipe</h1>
                </div>
                <div className="team-members">
                    {teamMembers.map((member) => (
                    <div key={member.id} className="team-member">
                        <img src={member.photo} alt={member.name} className="team-photo" />
                        <h2>{member.name}</h2>
                        <h4>{member.position}</h4>
                        <p>{member.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </section>


        <Footer />
    </div>
  );
};

export default Team;
