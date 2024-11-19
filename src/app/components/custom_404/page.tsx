// components/CustomError.tsx
import Link from 'next/link';

interface CustomErrorProps {
  message: string;
}

const CustomError: React.FC<CustomErrorProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">Error</h1>
      <p className="text-xl text-gray-700">{message}</p>
      <Link href="/" className="mt-4 text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default CustomError;
