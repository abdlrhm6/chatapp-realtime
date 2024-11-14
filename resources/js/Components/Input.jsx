export default function Input({label,name,type,placeholder,value,onChange,error ,Icon}){
    return (
        <>
        <div>
          <label htmlFor={name}className="block text-sm font-medium text-gray-300 mb-1">
            {label}
          </label>
          <div className="relative">
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              id={name}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              className="pl-10 w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
              placeholder={placeholder}
            />
          </div>
          {error && (
              <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
        </div>

        </>

    )
}
