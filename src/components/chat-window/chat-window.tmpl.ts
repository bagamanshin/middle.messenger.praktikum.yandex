export default `
{{#notNull chat}}
  <div class="chat-thread__head">
    <div class="chat-thread__head__left">
      <div class="chatlist__item__avatar"></div>
      <div class="chatlist__item__author">{{ chat.title }}</div>
    </div>
    <div class="chat-thread__head__right">
      <div class="chat-thread__head__settings">
        <div class="chat-thread__head__settings__button">
          <span class="chat-thread__head__settings__button__dot"></span
          ><span class="chat-thread__head__settings__button__dot"></span
          ><span class="chat-thread__head__settings__button__dot"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="chat-thread__content">
    <div class="chat-thread__content__overview-date">{{ currentDate }}</div>
    <div class="chat-thread__messages">
      <div class="chat-thread__messages__inner"></div>
    </div>
  </div>
  <div class="chat-thread__actions">
    <div class="chat-thread__actions__attach">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 280.067 280.067"
        style="
          enable-background: new 0 0 280.067 280.067;
          width: 25px;
          height: 25px;
        "
        xml:space="preserve"
      >
        <g>
          <path
            style="fill: grey"
            d="M149.823,257.142c-31.398,30.698-81.882,30.576-113.105-0.429   c-31.214-30.987-31.337-81.129-0.42-112.308l-0.026-0.018L149.841,31.615l14.203-14.098c23.522-23.356,61.65-23.356,85.172,0   s23.522,61.221,0,84.586l-125.19,123.02l-0.044-0.035c-15.428,14.771-40.018,14.666-55.262-0.394   c-15.244-15.069-15.34-39.361-0.394-54.588l-0.044-0.053l13.94-13.756l69.701-68.843l13.931,13.774l-83.632,82.599   c-7.701,7.596-7.701,19.926,0,27.53s20.188,7.604,27.88,0L235.02,87.987l-0.035-0.026l0.473-0.403   c15.682-15.568,15.682-40.823,0-56.39s-41.094-15.568-56.776,0l-0.42,0.473l-0.026-0.018l-14.194,14.089L50.466,158.485   c-23.522,23.356-23.522,61.221,0,84.577s61.659,23.356,85.163,0l99.375-98.675l14.194-14.089l14.194,14.089l-14.194,14.098   l-99.357,98.675C149.841,257.159,149.823,257.142,149.823,257.142z"
          />
        </g>
      </svg>
    </div>
  </div>
{{else}}
  <div class="chat-thread__empty">
    Choose a chat to send a message
    <p class="chat-thread__empty__create"><b>or</b></p>
  </div>
{{/notNull}}
`;
