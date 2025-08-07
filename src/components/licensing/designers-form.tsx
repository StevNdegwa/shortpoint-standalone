import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Users, Edit, Plus, X } from 'lucide-react'

interface Designer {
  id: string
  email: string
}

interface DesignersFormProps {
  designers: Designer[]
  onDesignersChange: (designers: Designer[]) => void
}

export function DesignersForm({ designers, onDesignersChange }: DesignersFormProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editingDesigners, setEditingDesigners] = useState<Designer[]>(designers)

  const handleAddDesigner = () => {
    const newDesigner: Designer = {
      id: Date.now().toString(),
      email: ''
    }
    setEditingDesigners([...editingDesigners, newDesigner])
  }

  const handleRemoveDesigner = (id: string) => {
    setEditingDesigners(editingDesigners.filter(designer => designer.id !== id))
  }

  const handleEmailChange = (id: string, email: string) => {
    setEditingDesigners(editingDesigners.map(designer => 
      designer.id === id ? { ...designer, email } : designer
    ))
  }

  const handleSave = () => {
    onDesignersChange(editingDesigners.filter(designer => designer.email.trim() !== ''))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditingDesigners(designers)
    setIsEditing(false)
  }

  return (
    <Card className="rounded-[14px] bg-white shadow-[0_7px_7px_-5px_rgba(0,0,0,0.04),0_10px_15px_-5px_rgba(0,0,0,0.10),0_1px_3px_0_rgba(0,0,0,0.05)]">
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-3 text-xl font-bold">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <span>Designers</span>
          </CardTitle>
          {!isEditing && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsEditing(true)}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-3">
              {editingDesigners.map((designer) => (
                <div key={designer.id} className="flex items-center space-x-3">
                  <Input
                    type="email"
                    placeholder="designer@example.com"
                    value={designer.email}
                    onChange={(e) => handleEmailChange(designer.id, e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRemoveDesigner(designer.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <Button
              variant="outline"
              onClick={handleAddDesigner}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add More Designer
            </Button>
            
            <div className="flex space-x-3 pt-4">
              <Button onClick={handleSave} className="flex-1">
                Save Changes
              </Button>
              <Button variant="outline" onClick={handleCancel} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {designers.length > 0 ? (
              designers.map((designer) => (
                <div key={designer.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-900">{designer.email}</span>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>No designers added yet</p>
                <p className="text-sm">Click edit to add designers</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
