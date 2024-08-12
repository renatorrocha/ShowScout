# ShowScout

**ShowScout** is a web application that allows users to log in with their Spotify account and view upcoming shows of their favorite artists. The application leverages the Spotify API to fetch the list of artists the user follows and displays their upcoming concerts.

## Features

- **Spotify Authentication**: Log in with your Spotify account.
- **Artist Tracking**: View a list of artists you follow on Spotify.
- **Upcoming Shows**: Get information about upcoming concerts and events for your favorite artists.

## Technologies Used

- **Next.js**: A React framework for server-rendered applications.
- **TypeScript**: A statically typed superset of JavaScript.
- **Tailwind CSS**: A utility-first CSS framework.
- **NextAuth**: Authentication for Next.js.
- **Spotify API**: Fetches data about the user's followed artists.
- **TicketMaster API**: Fetches data about the artist's concerts.

## Getting Started

### Prerequisites

- **Node.js**: v14.x or higher
- **npm**: v6.x or higher (or **yarn**: v1.22.x or higher)

<!-- ### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ShowScout.git
    cd ShowScout
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. **Create an application on Spotify Developer Dashboard**:
    - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications)
    - Create a new application and get your `Client ID` and `Client Secret`
    - Set the Redirect URI to `http://localhost:3000/api/auth/callback/spotify`

4. **Set up environment variables**:
    - Create a `.env.local` file in the root directory of your project and add the following environment variables:

    ```env
    SPOTIFY_CLIENT_ID=your_spotify_client_id
    SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
    NEXTAUTH_SECRET=your_nextauth_secret
    ```

5. **Run the development server**:
    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. -->

## Usage

1. **Sign In**: Click on the "Sign In with Spotify" button to authenticate with your Spotify account.
2. **View Followed Artists**: Once signed in, you can view a list of artists you follow on Spotify.
3. **Upcoming Shows**: Check out the upcoming concerts and events for your followed artists.

<!-- ## File Structure -->

<!-- ```plaintext
ShowScout/
├── components/
│   ├── AuthBtn.tsx        # Authentication button component
├── pages/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth].ts # NextAuth configuration
│   └── index.tsx          # Main page
├── public/
├── styles/
│   └── globals.css        # Global styles
├── .env.local             # Environment variables
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts -->
