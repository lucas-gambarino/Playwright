// Chat selectors
export const SELECTORS = {
  SUPPORT_BUTTON: 'li[id="ge-supernav-support"]',
  COOKIES_BUTTON: 'a[id="close-cookies-notice-banner-en-desktop"]',
  BOOTSTRAP: 'div[id="bootstrap"]',
  CHAT_BUTTON: 'div[id="engageChat"]',
  CHAT_TEXTAREA: 'textarea[id="chatTextArea"]',
  YES_BUTTON: 'button[value="yes"]',
  MOBILITY_BUTTON: 'button[value="mobility"]',
  MONTHLY_BUTTON: 'button[value="monthly"]',
  LOGIN_CHAT_BUTTON: 'div[role="button"]:contains("Login")',
  MESSAGE_BUBBLE: 'div[data-testid="MessageBubble"]',
  EXPERT_BUTTON: 'button[data-comp="qui-rep-but"]',
  USERNAME_FIELD: 'input[@data-testid="username"]',
  PASSWORD_FIELD: 'input[@data-testid="password"]',
  LOGIN_BUTTON: 'button[type="submit"]',
  DROPDOWNS: {
    SERVICE: 'select[id="input-1"]',
    PROJECT: 'select[id="input-4"]',
    BOT_ID: 'select[id="input-7"]',
    ENV_ID: 'select[id="input-10"]'
  }
}

// Login credentials
export const CREDENTIALS = {
  USERNAME: 'marc',
  PASSWORD: 'regishannah1956'
}

export const CREDENTIALS_FIRST_LOGIN = {
  USERNAME: 'test@fake.address.com',
  PASSWORD: 'Passw0rd'
}

export const CREDENTIALS_SECOND_LOGIN = {
  USERNAME: '2fa_prod_1@telusinternal.com',
  PASSWORD: 'Vader_qa1'
}

// Chat messages
export const MESSAGES = {
  INITIAL: {
    GREETING: "Hi, I'm TELUS Virtual Assistant!",
    NO_ACCOUNT: "I can't seem to find any accounts associated to your profile",
    HELP_PROMPT: "In a sentence or two, how can I help?"
  }
}

// Timeouts
export const TIMEOUTS = {
  MEDIUM: 3000,
  LONG: 5000
}