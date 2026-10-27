# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Preview

![App preview](./assets/images/preview.jpg)

## Get started

Install dependencies

   ```bash
   npm install
   ```

## Start the app

   ```bash
   npx expo start
   ```

## OMDb API key

Copy `.env.example` to `.env` in the project root, then replace the API key placeholder with your OMDb API key:

```env
EXPO_PUBLIC_MOVIES_BASE_URL=https://www.omdbapi.com/
EXPO_PUBLIC_OMDB_API_KEY=your_omdb_api_key
```

Expo only exposes environment variables to app code when their names start with `EXPO_PUBLIC_`. These values are embedded in the client bundle and are visible to app users, so do not put private secrets in them.

Restart the Expo development server after changing `.env`.

 
