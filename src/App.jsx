import ChatPrompt from './components/ChatPrompt'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 mb-4 mt-2">
        Chat con IA
      </h1>
      
      <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col">
        <div className="flex-1 flex flex-col pb-4">
          <ChatPrompt />
        </div>
        
        <p className="text-center text-purple-600 font-medium text-sm my-2">
          Desarrollado con ❤️ para UNICATOLICA 2025
        </p>
      </div>
    </div>
  )
}

export default App
