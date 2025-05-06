import { useState } from 'react'
import { Typography } from './components/Typography'
import { Input } from './components/Input/Input'
import { Modal } from './components/Modal/Modal'
import { Dropdown } from './components/Dropdown/Dropdown'
import { Toast } from './components/Toast/Toast'
import "./App.css"

function App() {
  const [showToast, setShowToast] = useState(false)
  const [toastVariant, setToastVariant] = useState<'success' | 'error' | 'warning' | 'info'>('info')
  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [dropdownValue, setDropdownValue] = useState('')

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  const showToastMessage = (variant: typeof toastVariant) => {
    setToastVariant(variant)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <header className="mb-12 text-center">
        <Typography variant="h1" className="mb-2 text-gray-800 font-bold">
          Design System
        </Typography>
        <Typography variant="p" className="text-gray-600 max-w-2xl mx-auto">
          A collection of reusable components built with React, TypeScript, and Tailwind CSS
        </Typography>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* Typography Showcase */}
        <section className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <Typography variant="h2" className="mb-6 text-gray-700 border-b pb-2">
            Typography
          </Typography>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Typography variant="h1" className="text-gray-900">Heading 1</Typography>
              <Typography variant="p" className="text-gray-500">48px • Bold • Line height 1.2</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="h2" className="text-gray-900">Heading 2</Typography>
              <Typography variant="p" className="text-gray-500">36px • Bold • Line height 1.25</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="p" className="text-gray-700">This is a paragraph demonstrating the typography system.</Typography>
              <Typography variant="p" className="text-gray-500">16px • Regular • Line height 1.5</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="label" className="text-gray-700">This is a label</Typography>
              <Typography variant="p" className="text-gray-500">14px • Medium • Line height 1.4</Typography>
            </div>
          </div>
        </section>

        {/* Input Field Showcase */}
        <section className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <Typography variant="h2" className="mb-6 text-gray-700 border-b pb-2">
            Input Fields
          </Typography>
          <div className="max-w-md space-y-6">
            <Input 
              label="Username" 
              placeholder="Enter your username"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              error={inputValue.length > 0 && inputValue.length < 8 ? 'Must be at least 8 characters' : undefined}
              className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </section>

        {/* Dropdown Showcase */}
        <section className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <Typography variant="h2" className="mb-6 text-gray-700 border-b pb-2">
            Dropdown
          </Typography>
          <div className="max-w-md">
            <Dropdown
              options={dropdownOptions}
              value={dropdownValue}
              onChange={setDropdownValue}
              label="Select an option"
            />
          </div>
        </section>

        {/* Feedback Components */}
        <section className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <Typography variant="h2" className="mb-6 text-gray-700 border-b pb-2">
            Feedback Components
          </Typography>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => showToastMessage('success')}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition-colors duration-200"
            >
              Show Success Toast
            </button>
            <button
              onClick={() => showToastMessage('error')}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-colors duration-200"
            >
              Show Error Toast
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-200"
            >
              Open Modal
            </button>
          </div>
        </section>
      </main>

      {/* Toast Component */}
      {showToast && (
        <Toast
          message={`This is a ${toastVariant} message!`}
          variant={toastVariant}
          onClose={() => setShowToast(false)}
        />
      )}

      {/* Modal Component */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Confirmation Modal"
      >
        <Typography variant="p" className="mb-6 text-gray-700">
          Are you sure you want to perform this action? This cannot be undone.
        </Typography>
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setShowModal(false)}
            className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default App