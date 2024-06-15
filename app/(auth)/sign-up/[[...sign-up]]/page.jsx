import { SignUp } from '@clerk/nextjs';
export const metadata = {
  title: "AyoubSVT | S'inscrire",
  description: "Créez votre compte pour continuer à AyoubSVT" ,
};
export default function Page() {
  return (
    
    <div className='flex items-center justify-center flex-col gap-10'>
          <div
      style={{
        // use the src property of the image object
        backgroundImage: `url(/images/bk.png)`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'0',
        margin:'0',
      }}
    >
      <div>
        {/* <h1 className='text-4xl font-bold m-5'>This is signup page</h1> */}
        <SignUp />
      </div>
    </div>
    </div>
    
  );
}