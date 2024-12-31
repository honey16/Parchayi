import {QueryClient, QueryClientProvider} from "@tanstack/react-query"  
import UnsplashGallery from "./components/gallery/Gallery.jsx"


const queryClient = new QueryClient();

export default function App() {
   return (
     <QueryClientProvider client={queryClient}>
       <div>
         <UnsplashGallery />
       </div>
     </QueryClientProvider>
   )
}
