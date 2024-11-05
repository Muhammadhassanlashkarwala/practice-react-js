import { ProfileCard } from "./ProfileCard";


export const Profile = () => {
return(
    <div>
  <h1>Profile Card Challenge!</h1>
      <hr />
  <ProfileCard name="Bob" age={35} greeting={<span><strong> Hello Bob, keep up the great work!
</strong></span>
} 
>
    <p>Hobbies: Reading, programming, gaming</p>
    <button>Contact</button> 
</ProfileCard>
    <hr />
<ProfileCard name="Alice" age={25} greeting={<span><strong> Hello Alice, keep up the great work!
</strong></span>
} 
>
    <p>Hobbies: programming, gaming</p>
    <button>Contact</button> 
</ProfileCard>
  </div>
);
};
