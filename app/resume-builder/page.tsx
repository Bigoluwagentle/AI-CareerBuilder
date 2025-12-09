"use client";

import { useState } from "react";
import Navbar from "../navbar/page";

type Personal = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  linkedin?: string;
  github?: string;
};

type WorkExperience = {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
};

type Project = {
  title: string;
  description: string;
  technologies?: string;
  link?: string;
};

type Reference = {
  name: string;
  relation?: string;
  contact?: string;
};

type ResumeForm = {
  personal: Personal;
  summary: string;
  skills: string;
  workExperience: WorkExperience[];
  projects: Project[];
  references: Reference[];
};

export default function Resume() {
  const [form, setForm] = useState<ResumeForm>({
    personal: { fullName: "", email: "", phone: "", address: "" },
    summary: "",
    skills: "",
    workExperience: [
      { jobTitle: "", company: "", location: "", startDate: "", endDate: "", responsibilities: "" },
    ],
    projects: [{ title: "", description: "", technologies: "", link: "" }],
    references: [{ name: "", relation: "", contact: "" }],
  });

  const [generatedResume, setGeneratedResume] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // ---------- Handlers ----------
  const handlePersonalChange = (field: keyof Personal, value: string) => {
    setForm(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
  };

  const handleWorkChange = (index: number, field: keyof WorkExperience, value: string) => {
    const updated = [...form.workExperience];
    updated[index][field] = value;
    setForm(prev => ({ ...prev, workExperience: updated }));
  };

  const handleProjectChange = (index: number, field: keyof Project, value: string) => {
    const updated = [...form.projects];
    updated[index][field] = value;
    setForm(prev => ({ ...prev, projects: updated }));
  };

  const handleReferenceChange = (index: number, field: keyof Reference, value: string) => {
    const updated = [...form.references];
    updated[index][field] = value;
    setForm(prev => ({ ...prev, references: updated }));
  };

  const addWorkExperience = () =>
    setForm(prev => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        { jobTitle: "", company: "", location: "", startDate: "", endDate: "", responsibilities: "" },
      ],
    }));

  const addProject = () =>
    setForm(prev => ({
      ...prev,
      projects: [...prev.projects, { title: "", description: "", technologies: "", link: "" }],
    }));

  const addReference = () =>
    setForm(prev => ({ ...prev, references: [...prev.references, { name: "", relation: "", contact: "" }] }));

  // ---------- Generate Resume ----------
  const generateResume = async () => {
    setIsGenerating(true);
    setGeneratedResume(""); // Clear previous output
    try {
      const res = await fetch("/api/generateResume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      let text = data.resume || "No resume generated.";

      // Remove all unwanted markdown symbols
      text = text.replace(/\*/g, "");
      text = text.replace(/#/g, "");
      text = text.replace(/---/g, "");
      text = text.replace(/\n\s*\n/g, "\n\n"); // clean extra blank lines

      setGeneratedResume(text);
    } catch (err) {
      console.error(err);
      setGeneratedResume("Error generating resume.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <main className="flex">
        <Navbar />
        <section className="w-full md:w-[80%] min-h-screen">
          <article className="ml-10 md:ml-0 px-10">
            <h1 className=" font-bold text-3xl my-5">Resume Builder</h1>
            <section className="flex flex-col md:flex-row">
              <form className="w-full md:w-[40%] border-r border-[#565D6DFF] min-h-screen flex flex-col gap-6 pb-10">
                <fieldset>
                  <legend className="font-bold mt-5">Personal Details</legend>
                  {["fullName", "email", "phone", "address", "linkedin", "github"].map(field => (
                    <div key={field} className="flex flex-col mt-5 w-[90%]">
                      <label className="mb-1">{field.replace(/([A-Z])/g, " $1")}</label>
                      <input
                        type={field.includes("email") ? "email" : "text"}
                        className="border border-[#565D6DFF] pl-3 h-10 rounded-sm"
                        value={form.personal[field as keyof Personal] || ""}
                        onChange={e => handlePersonalChange(field as keyof Personal, e.target.value)}
                      />
                    </div>
                  ))}
                </fieldset>

                {/* Summary */}
                <fieldset>
                  <legend className="font-bold mt-10">Professional Summary</legend>
                  <textarea
                    className="border border-[#565D6DFF] pl-3 pt-2 rounded-sm w-[90%]"
                    rows={4}
                    placeholder="Write a brief summary of your career goals and experience"
                    value={form.summary}
                    onChange={e => setForm(prev => ({ ...prev, summary: e.target.value }))}
                  />
                </fieldset>

                {/* Skills */}
                <fieldset>
                  <legend className="font-bold mt-10">Skills</legend>
                  <input
                    type="text"
                    placeholder="HTML, CSS, JavaScript, React"
                    className="border border-[#565D6DFF] pl-3 h-10 rounded-sm w-[90%]"
                    value={form.skills}
                    onChange={e => setForm(prev => ({ ...prev, skills: e.target.value }))}
                  />
                </fieldset>

                {/* Work Experience */}
                <fieldset>
                  <legend className="font-bold mt-10">Work Experience</legend>
                  {form.workExperience.map((we, i) => (
                    <div key={i} className="flex flex-col gap-2 mt-3 w-[90%] border p-3 rounded">
                      <input type="text" placeholder="Job Title" className="border pl-2 h-10 rounded-sm" value={we.jobTitle} onChange={e => handleWorkChange(i, "jobTitle", e.target.value)} />
                      <input type="text" placeholder="Company" className="border pl-2 h-10 rounded-sm" value={we.company} onChange={e => handleWorkChange(i, "company", e.target.value)} />
                      <input type="text" placeholder="Location" className="border pl-2 h-10 rounded-sm" value={we.location} onChange={e => handleWorkChange(i, "location", e.target.value)} />
                      <div className="flex gap-2">
                        <input type="text" placeholder="Start Date" className="border pl-2 h-10 rounded-sm flex-1" value={we.startDate} onChange={e => handleWorkChange(i, "startDate", e.target.value)} />
                        <input type="text" placeholder="End Date" className="border pl-2 h-10 rounded-sm flex-1" value={we.endDate} onChange={e => handleWorkChange(i, "endDate", e.target.value)} />
                      </div>
                      <textarea placeholder="Responsibilities / Achievements" className="border pl-2 pt-1 rounded-sm" rows={3} value={we.responsibilities} onChange={e => handleWorkChange(i, "responsibilities", e.target.value)} />
                    </div>
                  ))}
                  <button type="button" className="mt-3 text-blue-600 underline w-[90%]" onClick={addWorkExperience}>+ Add Work Experience</button>
                </fieldset>

                {/* Projects */}
                <fieldset>
                  <legend className="font-bold mt-10">Projects</legend>
                  {form.projects.map((p, i) => (
                    <div key={i} className="flex flex-col gap-2 mt-3 w-[90%] border p-3 rounded">
                      <input type="text" placeholder="Project Title" className="border pl-2 h-10 rounded-sm" value={p.title} onChange={e => handleProjectChange(i, "title", e.target.value)} />
                      <textarea placeholder="Description" className="border pl-2 pt-1 rounded-sm" rows={2} value={p.description} onChange={e => handleProjectChange(i, "description", e.target.value)} />
                      <input type="text" placeholder="Technologies" className="border pl-2 h-10 rounded-sm" value={p.technologies} onChange={e => handleProjectChange(i, "technologies", e.target.value)} />
                      <input type="text" placeholder="Project Link" className="border pl-2 h-10 rounded-sm" value={p.link} onChange={e => handleProjectChange(i, "link", e.target.value)} />
                    </div>
                  ))}
                  <button type="button" className="mt-3 text-blue-600 underline w-[90%]" onClick={addProject}>+ Add Project</button>
                </fieldset>

                {/* References */}
                <fieldset>
                  <legend className="font-bold mt-10">References</legend>
                  {form.references.map((r, i) => (
                    <div key={i} className="flex flex-col gap-2 mt-3 w-[90%] border p-3 rounded">
                      <input type="text" placeholder="Name" className="border pl-2 h-10 rounded-sm" value={r.name} onChange={e => handleReferenceChange(i, "name", e.target.value)} />
                      <input type="text" placeholder="Relation (optional)" className="border pl-2 h-10 rounded-sm" value={r.relation} onChange={e => handleReferenceChange(i, "relation", e.target.value)} />
                      <input type="text" placeholder="Contact (optional)" className="border pl-2 h-10 rounded-sm" value={r.contact} onChange={e => handleReferenceChange(i, "contact", e.target.value)} />
                    </div>
                  ))}
                  <button type="button" className="mt-3 text-blue-600 underline w-[90%]" onClick={addReference}>+ Add Reference</button>
                </fieldset>

                {/* Generate Button */}
                <button
                  type="button"
                  className="mt-5 bg-blue-500 text-white w-[90%] h-12 rounded"
                  onClick={generateResume}
                  disabled={isGenerating}
                >
                  {isGenerating ? "Generating resume..." : "Generate Resume"}
                </button>
              </form>

              {/* ---------- Preview Section ---------- */}
              <aside className="flex-1 h-screen sticky top-0 overflow-y-auto p-5 bg-gray-50 border-l border-[#565D6DFF]">
                <h2 className="font-bold text-xl mb-3">Resume Preview</h2>
                <pre className="whitespace-pre-wrap">{generatedResume || "Your resume preview will appear here..."}</pre>
              </aside>
            </section>
          </article>
        </section>
      </main>
    </div>
  );
}
