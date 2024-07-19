import { Footer } from "../components/footer";
import { Header } from "../components/header";
export const NotFound = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
      <div className="container mx-auto px-4">
        <img src="/image-erro.jpg" alt="NotFound" className="mx-auto max-w-full h-auto" />
      </div>
      </main>
      <Footer/>
    </>
  );
};
