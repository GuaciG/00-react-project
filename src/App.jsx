import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
	{
		userName: "midudev",
		personName: "Miguel Angel Duran",
		isFollowing: true
	},
	{
		userName: "pheralb",
		personName: "Pablo Hernandez",
		isFollowing: false
	},
	{
		userName: "Vanderhart",
		isFollowing: true
	}
];

export function App() {
	//const midudev = { initialIsFollowing: true, userName: "midudev" };

	return (
		<div className="App">
			{users.map(user => (
				<TwitterFollowCard
					key={user.userName}
					initialIsFollowing={user.isFollowing}
					userName={user.userName}
				>
					{user.personName}
				</TwitterFollowCard>
			))}
			{/*

			<TwitterFollowCard {...midudev}>Miguel Angel Duran</TwitterFollowCard>
			<TwitterFollowCard initialIsFollowing={false} userName="pheralb">
				Pablo Hernandez
			</TwitterFollowCard>
			<TwitterFollowCard initialIsFollowing>Vanderhart</TwitterFollowCard>
			
			*/}
		</div>
	);
}
