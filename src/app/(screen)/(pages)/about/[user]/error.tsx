'use client'

interface ErrorBoundaryInterface {
    error:Error,
    reset:()=>void
  }


export default function ErrorBoundary({error,reset}:ErrorBoundaryInterface){
    return(
        <div>
            {error?.message}
            <button onClick={reset}>Try Again</button>
        </div>
    )
}