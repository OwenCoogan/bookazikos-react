import { Link } from 'react-router-dom';

type FormHeaderType = {
  title: string;
  subtitle?: string;
  route?: string;
}

export default function FormHeader({
  title,
  subtitle,
  route
} : FormHeaderType){
  return (
    <div className="text-center mt-24">
      <div className="flex items-center justify-center">
         <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-primary-500" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
         </svg>
      </div>
      <h2 className="text-4xl tracking-tight">
         {title}
      </h2>
      {
         subtitle && route && (
            <span className="text-sm">or <Link to={route} className="text-primary-500">
               {subtitle}
            </Link>
         </span>)
      }
</div>
  )
}
