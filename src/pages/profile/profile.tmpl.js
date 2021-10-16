export default `
<div class="card profile">
  <div class="profile__badge">
    <div class="profile__avatar"></div>
    <h1 class="h2">Ivan</h1>
  </div>

  <form>
    <fieldset class="fieldset">
      {{> emailInput }}
      <legend class="fieldset__legend">Email</legend>
    </fieldset>
    <fieldset class="fieldset">
      {{> loginInput }}
      <legend class="fieldset__legend">Login</legend>
    </fieldset>
    <fieldset class="fieldset">
      {{>firstNameInput }}
      <legend class="fieldset__legend">Name</legend>
    </fieldset>
    <fieldset class="fieldset">
      {{> secondNameInput }}
      <legend class="fieldset__legend">Surname</legend>
    </fieldset>
    <fieldset class="fieldset">
      {{>displayNameInput }}
      <legend class="fieldset__legend">Nickname</legend>
    </fieldset>
    <fieldset class="fieldset">
      {{>phoneInput}}
      <legend class="fieldset__legend">Phone number</legend>
    </fieldset>
    <br />
    <div align="right">
      <a href="./modules/edit/index.html" class="button-link">Edit profile</a>
      <a href="./modules/edit-password/index.html" class="button-link">Edit password</a>
      <button class="button">Exit</button>
    </div>
  </form>
</div>
`;
