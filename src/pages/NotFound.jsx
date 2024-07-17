import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const NotFound = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        
      <div>
        <img src="/image-erro.jpg" alt="NotFound" className="mx-auto max-w-full " />
      </div>
      </main>
      <Footer/>
    </>
  );
};
