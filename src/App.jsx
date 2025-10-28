import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../supabaseClient";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  console.log(session?.user?.email);

  const signOut = async () => {
    await supabase.auth.signOut();
  };
  const signUpWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  const signUpWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  if (!session) {
    return (
      <>
        {/*<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;*/}
        <button onClick={signUpWithGoogle}>Sign in with Google</button>
        <button onClick={signUpWithGithub}>Sign in with Github</button>
      </>
    );
  } else {
    return (
      <div>
        <h2>Welcome! , {session.user.email}</h2>
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  }
}

export default App;
