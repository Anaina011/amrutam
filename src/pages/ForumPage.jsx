import { useState } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiX,
  FiMoreHorizontal,
  FiHeart,
  FiMessageCircle,
  FiBookmark,
} from "react-icons/fi";

// ----------------- MOCK DATA -----------------
const INITIAL_QUESTIONS = [
  {
    id: 1,
    concern: "Hair fall",
    author: "Anonymous",
    daysAgo: "5 days ago",
    question: "Can Ayurveda help with stress and mental health issues?",
    summary:
      "Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle adjustments.",
    replyCount: 10,
    tags: ["General Ayurveda", "Basics of Ayurveda"],
    answerer: "Dr. Mathew Adams",
    answerDaysAgo: "5 days ago",
    answer:
      "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
    likes: 23,
    answers: 1,
    saves: 3,
  },
  {
    id: 2,
    concern: "Digestion",
    author: "Anonymous",
    daysAgo: "4 days ago",
    question: "What are some Ayurvedic tips for improving digestion?",
    summary:
      "Looking for dietary and lifestyle recommendations from Ayurveda to support better digestion and reduce bloating or heaviness after meals.",
    replyCount: 9,
    tags: ["Digestion", "Lifestyle"],
    answerer: "Dr. Mathew Adams",
    answerDaysAgo: "4 days ago",
    answer:
      "Ans. Simple habits like eating warm, freshly prepared food, avoiding ice-cold drinks, and including spices such as ginger, cumin and fennel can significantly support digestive fire (agni).",
    likes: 18,
    answers: 1,
    saves: 2,
  },
  {
    id: 3,
    concern: "Acne",
    author: "Anonymous",
    daysAgo: "3 days ago",
    question: "Can Ayurveda help in treating recurring acne on the face?",
    summary:
      "Frequent breakouts on cheeks and forehead — looking for Ayurvedic herbs or routines that can help with oily skin and acne scars.",
    replyCount: 7,
    tags: ["Skin", "General Ayurveda"],
    answerer: "Dr. Mathew Adams",
    answerDaysAgo: "3 days ago",
    answer:
      "Ans. Herbs like neem, manjistha and aloe vera are often used in Ayurveda to purify the blood and support healthy skin. A regular routine with gentle herbal face packs and a sattvic diet can help reduce recurring acne.",
    likes: 15,
    answers: 1,
    saves: 4,
  },
  {
    id: 4,
    concern: "Sleep disorders",
    author: "Anonymous",
    daysAgo: "2 days ago",
    question: "Any Ayurvedic remedies for difficulty falling asleep?",
    summary:
      "I struggle with falling asleep quickly and often wake up at night. Are there Ayurvedic teas or oils that can support better sleep?",
    replyCount: 6,
    tags: ["Sleep disorders", "Lifestyle"],
    answerer: "Dr. Mathew Adams",
    answerDaysAgo: "2 days ago",
    answer:
      "Ans. Warm milk with nutmeg, oil massage (abhyanga) with sesame oil, and fixed sleep timings are simple Ayurvedic tools that can calm the nervous system and support deep sleep.",
    likes: 11,
    answers: 1,
    saves: 2,
  },
  {
    id: 5,
    concern: "Hypertension",
    author: "Anonymous",
    daysAgo: "1 day ago",
    question: "How does Ayurveda manage high blood pressure?",
    summary:
      "Recently diagnosed with hypertension; interested in lifestyle and herbal suggestions from Ayurveda that can support my treatment.",
    replyCount: 8,
    tags: ["Hypertension", "General"],
    answerer: "Dr. Mathew Adams",
    answerDaysAgo: "1 day ago",
    answer:
      "Ans. Ayurveda emphasises gentle exercise, low-salt diet, breathing practices and herbs like arjuna to support heart health. These should be combined carefully with your physician’s advice.",
    likes: 14,
    answers: 1,
    saves: 3,
  },
];

const CONCERNS = [
  "Hair fall",
  "Digestion",
  "Obesity",
  "Anxiety",
  "Hypertension",
  "Allergies",
  "Anemia",
  "Sleep disorders",
  "Influenza",
  "Acne",
  "Sinusitis",
  "Infertility",
  "General",
];

// ----------------- MAIN COMPONENT -----------------
export default function ForumPage() {
  const [activeTab, setActiveTab] = useState("questions");
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const [isAskOpen, setIsAskOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [selectedConcern, setSelectedConcern] = useState("General");
  const [concernSearch, setConcernSearch] = useState("");

  const filteredQuestions = questions.filter((q) => {
    if (!searchTerm.trim()) return true;
    const t = searchTerm.toLowerCase();
    return (
      q.concern.toLowerCase().includes(t) ||
      q.question.toLowerCase().includes(t) ||
      q.tags.some((tag) => tag.toLowerCase().includes(t))
    );
  });

  const visibleQuestions = filteredQuestions.slice(0, visibleCount);

  const filteredConcerns = CONCERNS.filter((c) =>
    c.toLowerCase().includes(concernSearch.toLowerCase())
  );

  const handleAskSubmit = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const now = new Date();
    const newItem = {
      id: Date.now(),
      concern: selectedConcern,
      author: "Anonymous",
      daysAgo: "Just now",
      question: newQuestion.trim(),
      summary:
        newDescription.trim() ||
        "New question added by the community. Description coming soon.",
      replyCount: 0,
      tags: [selectedConcern, "Community"],
      answerer: "Awaiting doctor response",
      answerDaysAgo: "",
      answer: "",
      likes: 0,
      answers: 0,
      saves: 0,
    };

    setQuestions((prev) => [newItem, ...prev]);
    setVisibleCount((prev) => Math.max(prev, 3));

    // reset form
    setNewQuestion("");
    setNewDescription("");
    setSelectedConcern("General");
    setIsAskOpen(false);
  };

  const handleOpenAsk = () => {
    setIsAskOpen(true);
  };

  const handleCloseAsk = () => {
    setIsAskOpen(false);
  };

  const handleSelectConcern = (concern) => {
    setSelectedConcern(concern);
    setIsCategoryModalOpen(false);
  };

  // ----------------- RENDER -----------------
  return (
    <div className="bg-[#F5FAF6] min-h-screen">
<section className="relative bg-[#E8F3EA] py-12 md:py-16 overflow-hidden">

  <div className="absolute top-10 left-10 w-40 h-40 bg-[#D8E9D4] rounded-full opacity-50"></div>
  <div className="absolute bottom-10 right-20 w-52 h-52 bg-[#D8E9D4] rounded-full opacity-50"></div>
  <div className="absolute top-1/2 right-1/3 w-44 h-44 bg-[#D8E9D4] rounded-full opacity-40"></div>

  <div className="relative max-w-4xl mx-auto px-4 text-center">
    <h1 className="text-2xl md:text-3xl font-semibold text-[#1F2933]">
      Find Discussions Related To Ayurveda Here
    </h1>
  </div>
</section>

      {/* <section className="py-10 md:py-14 bg-[#F5FAF6]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#1F2933]">
            Find Discussions Related To Ayurveda Here
          </h1>
        </div>
      </section> */}

      {/* MAIN CARD */}
      <section className="pb-16 pt-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-[#E4E8EC]">
            <div className="flex border-b border-[#E4E8EC]">
              <button
                type="button"
                onClick={() => setActiveTab("questions")}
                className={`flex-1 py-4 text-sm font-semibold ${
                  activeTab === "questions"
                    ? "text-[#275A3A] border-b-2 border-[#275A3A]"
                    : "text-[#7B8794]"
                }`}
              >
                Questions
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("thoughts")}
                className={`flex-1 py-4 text-sm font-semibold ${
                  activeTab === "thoughts"
                    ? "text-[#275A3A] border-b-2 border-[#275A3A]"
                    : "text-[#7B8794]"
                }`}
              >
                Thoughts
              </button>
            </div>

            {activeTab === "questions" && (
              <div className="px-6 pt-4 pb-3 border-b border-[#E4E8EC]">
                <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
                  <div className="flex-1 flex items-center gap-2 rounded-full border border-[#D0D7DE] bg-[#F9FAFB] px-4 py-2.5">
                    <FiSearch className="text-[#9AA5B1]" />
                    <input
                      className="flex-1 bg-transparent outline-none text-sm"
                      placeholder="Search for concern, question, or tag"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-[#E2F2E7] flex items-center justify-center text-xs font-semibold text-[#275A3A]">
                      P
                    </div>
                    <span className="text-xs md:text-sm text-[#1F2933]">
                      Priya Singh
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleOpenAsk}
                    className="rounded-full bg-[#275A3A] text-white text-sm font-semibold px-5 py-2.5"
                  >
                    Ask Question
                  </button>
                </div>
              </div>
            )}

            {activeTab === "questions" && (
              <div className="px-6 pb-6">
                {visibleQuestions.map((q) => (
                  <article
                    key={q.id}
                    className="border-b last:border-b-0 border-[#E4E8EC] py-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#E2F2E7] flex items-center justify-center text-xs font-semibold text-[#275A3A]">
                          {q.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#1F2933]">
                            {q.author}
                          </p>
                          <p className="text-[11px] text-[#9AA5B1]">
                            {q.daysAgo}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="text-[#9AA5B1] hover:text-[#4B5563]"
                      >
                        <FiMoreHorizontal />
                      </button>
                    </div>

                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-semibold text-[#1F2933]">
                        Question: {q.question}
                      </p>
                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {q.summary}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-[#9AA5B1]">
                      <span>
                        Replies • {q.replyCount}{" "}
                        {q.replyCount === 1 ? "reply" : "reply"}
                      </span>
                      <button
                        type="button"
                        className="text-[11px] text-[#275A3A] font-semibold"
                      >
                        View All {q.replyCount} Replies
                      </button>
                    </div>

                    {q.answer && (
                      <div className="mt-3 rounded-2xl bg-[#EEF9EF] px-4 py-3 text-xs text-[#1F2933]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-semibold text-[#275A3A]">
                            DM
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-[#1F2933]">
                              {q.answerer}
                            </p>
                            <p className="text-[10px] text-[#9AA5B1]">
                              {q.answerDaysAgo}
                            </p>
                          </div>
                        </div>
                        <p className="leading-relaxed">{q.answer}</p>
                      </div>
                    )}

                    <div className="mt-3 flex flex-wrap gap-2">
                      {q.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#F0F6F9] text-[11px] text-[#275A3A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-[#9AA5B1]">
                      <div className="flex items-center gap-1">
                        <FiHeart className="text-[#9AA5B1]" />
                        <span>{q.likes} Likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMessageCircle className="text-[#9AA5B1]" />
                        <span>{q.answers} Reply</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiBookmark className="text-[#9AA5B1]" />
                        <span>{q.saves} Saves</span>
                      </div>
                    </div>
                  </article>
                ))}

                {visibleCount < filteredQuestions.length && (
                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount(filteredQuestions.length)
                      }
                      className="text-sm text-[#1F2933] flex items-center gap-1"
                    >
                      Load More
                      <span className="text-lg leading-none">▾</span>
                    </button>
                  </div>
                )}

                {filteredQuestions.length === 0 && (
                  <div className="py-10 text-center text-sm text-[#9AA5B1]">
                    No questions found for this search.
                  </div>
                )}
              </div>
            )}

            {activeTab === "thoughts" && (
              <div className="px-6 py-10 text-center text-sm text-[#9AA5B1]">
                Thoughts section coming soon.
              </div>
            )}
          </div>
        </div>
      </section>

      {isAskOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full shadow-xl relative">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E8EC]">
              <h2 className="text-base md:text-lg font-semibold text-[#1F2933]">
                Ask Question
              </h2>
              <button
                type="button"
                onClick={handleCloseAsk}
                className="text-[#9AA5B1] hover:text-[#4B5563]"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAskSubmit} className="px-6 py-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E2F2E7] flex items-center justify-center text-xs font-semibold text-[#275A3A]">
                  AG
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1F2933]">
                    Agnim Gupta
                  </p>
                  <p className="text-[11px] text-[#9AA5B1]">Public</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B5563] mb-1">
                  Add Question <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border border-[#D0D7DE] rounded-xl px-3 py-2 text-sm outline-none focus:border-[#275A3A]"
                  placeholder="Ask your question here"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  maxLength={200}
                />
                <p className="mt-1 text-[11px] text-[#9AA5B1]">
                  max 50 words
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B5563] mb-1">
                  Add Description
                </label>
                <textarea
                  className="w-full border border-[#D0D7DE] rounded-xl px-3 py-2 text-sm outline-none focus:border-[#275A3A] resize-none h-24"
                  placeholder="Add your description here"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  maxLength={400}
                />
                <p className="mt-1 text-[11px] text-[#9AA5B1]">
                  max 70 words
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B5563] mb-1">
                  Category (Concern)
                </label>
                <button
                  type="button"
                  onClick={() => setIsCategoryModalOpen(true)}
                  className="w-full flex items-center justify-between border border-[#D0D7DE] rounded-xl px-3 py-2 text-sm text-[#1F2933]"
                >
                  <span>{selectedConcern}</span>
                  <FiChevronDown className="text-[#9AA5B1]" />
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B5563] mb-1">
                  Attachments
                </label>
                <div className="w-full border border-[#D0D7DE] rounded-xl px-3 py-2 text-xs text-[#9AA5B1]">
                  Add attachments
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2 pb-4">
                <button
                  type="button"
                  onClick={handleCloseAsk}
                  className="px-4 py-2 rounded-full border border-[#D0D7DE] text-xs font-semibold text-[#4B5563]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-[#275A3A] text-white text-xs font-semibold"
                >
                  Ask
                </button>
              </div>
            </form>
          </div>

          {isCategoryModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
              <div className="bg-white rounded-3xl max-w-xl w-full shadow-xl">
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E8EC]">
                  <h3 className="text-sm md:text-base font-semibold text-[#1F2933]">
                    Select a Category for Your Question
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsCategoryModalOpen(false)}
                    className="text-[#9AA5B1] hover:text-[#4B5563]"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <div className="px-6 py-4 space-y-4">
                  <div className="flex items-center gap-2 rounded-full border border-[#D0D7DE] bg-[#F9FAFB] px-4 py-2.5">
                    <FiSearch className="text-[#9AA5B1]" />
                    <input
                      className="flex-1 bg-transparent outline-none text-sm"
                      placeholder="Search for concern"
                      value={concernSearch}
                      onChange={(e) => setConcernSearch(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto">
                    {filteredConcerns.map((concern) => (
                      <button
                        key={concern}
                        type="button"
                        onClick={() => handleSelectConcern(concern)}
                        className={`px-3 py-1 rounded-full border text-xs ${
                          concern === selectedConcern
                            ? "bg-[#275A3A] text-white border-[#275A3A]"
                            : "bg-[#F6F8FA] text-[#1F2933] border-[#D0D7DE]"
                        }`}
                      >
                        {concern}
                      </button>
                    ))}

                    {filteredConcerns.length === 0 && (
                      <p className="text-[11px] text-[#9AA5B1]">
                        No concerns match this search.
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end pt-2 pb-4">
                    <button
                      type="button"
                      onClick={() => setIsCategoryModalOpen(false)}
                      className="px-5 py-2 rounded-full bg-[#275A3A] text-white text-xs font-semibold"
                    >
                      Add Concern
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
