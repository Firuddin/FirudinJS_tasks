axios.get('https://api.github.com/users/Ali-GreenHeart')
  .then((response) => {
    const data = response.data;
    
    console.log('GitHub Adı:', data.login);
    console.log('Profil sekli:', data.avatar_url);
    console.log('Reposu:', data.public_repos);
    console.log('Follower Sayı:', data.followers);
    console.log('Following Sayı:', data.following);
  })