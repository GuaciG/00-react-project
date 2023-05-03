import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

const users = [
  {
    userName: 'johnwickcutz',
    personName: 'John Wick',
    isFollowing: true
  },
  {
    userName: 'themandalorian',
    personName: 'Din Djarin',
    isFollowing: true
  },
  {
    userName: 'bo_katan_kryze',
    personName: 'Bo-Katan Kryze',
    isFollowing: false
  },
  {
    userName: 'grogu',
    personName: 'Din Grogu',
    isFollowing: true
  }
]

export function App() {
  /* 
	ej. passing all object properties together, this is 
	not very good practise
	
	const grogu = { 
		isFollowing: true, 
		userName: 'grogu', 
		personName: 'Din Grogu'
	} 
	
	<TwitterFollowCard {...grogu}>
	*/

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Who to follow</h3>
      </header>
      {users.map(user => (
        <TwitterFollowCard
          key={user.userName}
          initialIsFollowing={user.isFollowing}
          userName={user.userName}
        >
          {user.personName}
        </TwitterFollowCard>
      ))}
      <footer className='App-footer'>
        <a href=''>Show more</a>
      </footer>
    </div>
  )
}
