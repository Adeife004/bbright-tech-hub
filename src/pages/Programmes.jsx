import { useState, useMemo, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar.jsx";
import ProgrammesHero from "../components/ProgrammesHero.jsx";
import ProgrammesFilter from "../components/ProgrammesFilter.jsx";
import ProgrammesCatalogue from "../components/ProgrammesCatalogue.jsx";
import ProgrammesSpecialTracks from "../components/ProgrammesSpecialTracks.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

import { programmes } from "../data/programmes.js";

function ProgrammesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");

  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  // ── Filtering logic ───────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();

    return programmes.filter((p) => {
      const matchCategory = category === "all" || p.category === category;
      const matchLevel = level === "all" || p.level === level;
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.keywords.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);

      return matchCategory && matchLevel && matchSearch;
    });
  }, [search, category, level]);

  function clearFilters() {
    setSearch("");
    setCategory("all");
    setLevel("all");
  }

  // Only show result count after user has applied a filter
  const isFiltered = search || category !== "all" || level !== "all";

  return (
    <>
      <Navbar />

      <ProgrammesHero search={search} onSearchChange={setSearch} />

      <ProgrammesFilter
        activeCategory={category}
        onCategoryChange={setCategory}
        activeLevel={level}
        onLevelChange={setLevel}
        resultCount={isFiltered ? filtered.length : null}
      />

      <ProgrammesCatalogue
        programmes={filtered}
        onClearFilters={clearFilters}
      />

      <ProgrammesSpecialTracks />

      <CTABanner />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default ProgrammesPage;
