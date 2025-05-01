import { useState } from "react";

const CompleteProfile = () => {
  const [userProfile, setUserProfile] = useState({
    fullName: "",
    gender: "",
    dob: "",
    height: "",
    weight: "",
    unitPreference: "",
    fitnessGoal: "",
    experienceLevel: "",
    workoutFrequency: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userProfile);
  };

  return (
    <div className="flex text-white flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-1">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-white">Complete Your Profile</h1>
        <p className="text-sm text-gray-400">
          Please fill out the following information to complete your profile.
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="fullName"
          value={userProfile.fullName}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        />
        <select
          name="gender"
          value={userProfile.gender}
          onChange={handleChange}
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        >
          <option value="" disabled>
            Gender (optional, helps with tailored insights)
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        <input
          name="dob"
          value={userProfile.dob}
          onChange={handleChange}
          type="date"
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        />
        <input
          name="height"
          value={userProfile.height}
          onChange={handleChange}
          type="text"
          placeholder="Height (cm or ft/in)"
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        />
        <input
          name="weight"
          value={userProfile.weight}
          onChange={handleChange}
          type="text"
          placeholder="Weight (kg or lbs)"
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        />
        <select
          name="unitPreference"
          value={userProfile.unitPreference}
          onChange={handleChange}
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        >
          <option value="" disabled>
            Unit Preference (metric/imperial)
          </option>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
        <select
          name="fitnessGoal"
          value={userProfile.fitnessGoal}
          onChange={handleChange}
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        >
          <option value="" disabled>
            Fitness Goal
          </option>
          <option value="build-muscle">Build Muscle</option>
          <option value="lose-fat">Lose Fat</option>
          <option value="improve-strength">Improve Strength</option>
          <option value="maintain-health">Maintain Health</option>
        </select>
        <select
          name="experienceLevel"
          value={userProfile.experienceLevel}
          onChange={handleChange}
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        >
          <option value="" disabled>
            Experience Level
          </option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <select
          name="workoutFrequency"
          value={userProfile.workoutFrequency}
          onChange={handleChange}
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        >
          <option value="" disabled>
            Workout Frequency (times per week, 1–7)
          </option>
          {[...Array(7)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Save Changes
        </button>
      </form>

      <p className="text-sm text-gray-400">
        Need help?{" "}
        <a href="/help" className="text-blue-500 hover:underline">
          Contact Support
        </a>
      </p>
    </div>
  );
};

export default CompleteProfile;
