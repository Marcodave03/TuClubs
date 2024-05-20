import React, { useState, useMemo } from "react";
import "./Discover.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { clubData } from "../../data/clubDatas.jsx";
import { motion } from "framer-motion";

const categories = [
  { name: "All", emoji: "✅" },
  { name: "Business", emoji: "💰" },
  { name: "Sports", emoji: "💪" },
  { name: "Finance", emoji: "📈" },
  { name: "Social ", emoji: "💬" },
  { name: "International", emoji: "🌍" },
  { name: "Tech", emoji: "💻" },
  { name: "Student Bodies", emoji: "👨‍✈️" },
  { name: "Gaming", emoji: "👾" },
  { name: "Culinology", emoji: "👩‍🍳" },
  { name: "Music", emoji: "🎸" },
];

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const maxPageButtons = 3;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const filteredClubs = useMemo(() => {
    let filtered = clubData.filter((club) => {
      const matchesCategory =
        selectedCategory === "All" ||
        club.tags.some((tag) => tag.includes(selectedCategory));
      const matchesSearchTerm =
        club.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearchTerm;
    });

    filtered.sort((a, b) =>
      b.highlighted === a.highlighted ? 0 : b.highlighted ? 1 : -1
    );

    return filtered;
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredClubs.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredClubs.slice(indexOfFirstCard, indexOfLastCard);

  const getPageNumbers = () => {
    const pages = [];
    const halfMax = Math.floor(maxPageButtons / 2);
    let startPage = Math.max(currentPage - halfMax, 1);
    let endPage = startPage + maxPageButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="discover-clubs">
      <h2>
        Discover <span className="orange">Clubs</span>
      </h2>
      <div className="main-container">
        <div className="left-panel">
          <div className="button-container">
            <div className="button-list">
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`category-button ${
                    selectedCategory === category.name ? "selected" : ""
                  }`}
                >
                  {category.emoji} {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="search-container">
          <motion.input 
          whileFocus={{ scale: 1.005 }} 
          type="text"
          id="search-input"
          placeholder="🔎 Search with name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="cards-images">
            <div className="club-cards-container">
              <div className="club-cards">
                {currentCards.map((club, index) => (
                  <div
                    key={index}
                    className={`club-card ${
                    club.highlighted ? "highlighted" : ""
                    }`}
                  >
                    <div className="club-image-title">
                      <img src={assets[club.imageKey]} alt={club.title} />
                      <Link to={`/club/${club.imageKey}`}>
                        <h3>{club.title}</h3>
                      </Link>
                    </div>
                    <div className="club-description">
                      <p>{club.description}</p>
                    </div>
                    <div className="tags-buttons">
                      <div className="tags">
                        {club.highlighted && (
                          <button className="highlight-tag" disabled>
                            ⭐️ Featured
                          </button>
                        )}
                        {club.tags.map((tag, tagIndex) => (
                          <button key={tagIndex}>{tag}</button>
                        ))}
                      </div>
                      <div className="button">
                        <Link to={`/club/${club.imageKey}`}>
                          <motion.button
                            whileTap={{ scale: 0.9 }}>
                            Explore</motion.button> 
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {getPageNumbers().map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
