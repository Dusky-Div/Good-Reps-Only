interface AddExerciseButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  icon?: any;
}

const AddSetExButton: React.FC<AddExerciseButtonProps> = ({
  title,
  className,
  onClick,
  icon,
}) => {
  return (
    <button
      onClick={onClick} // Attach onClick event
      className={`flex h-fit gap-2 p-2 justify-center items-center rounded-xl ${className}`}
    >
      {icon}
      <p className="text-lg font-medium">{title}</p>
    </button>
  );
};

export default AddSetExButton;
