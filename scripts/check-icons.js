(async function () {
  try {
    const lucide = await import("lucide-react");
    const used = [
      "ArrowRight",
      "BadgeCheck",
      "Book",
      "Briefcase",
      "Building2",
      "Calendar",
      "CheckCircle",
      "ClipboardCheck",
      "Eye",
      "Facebook",
      "FileCheck",
      "FileText",
      "FolderOpen",
      "Gift",
      "Globe",
      "GraduationCap",
      "HandHeart",
      "Heart",
      "HeartPulse",
      "Instagram",
      "Layers",
      "Leaf",
      "Lightbulb",
      "Linkedin",
      "Mail",
      "Map",
      "MapPin",
      "Menu",
      "MessageCircle",
      "MessageSquare",
      "Moon",
      "Network",
      "Phone",
      "Scale",
      "School",
      "Search",
      "Send",
      "ShieldCheck",
      "Sun",
      "Twitter",
      "Users",
      "Users2",
      "UsersRound",
      "X",
      "Youtube",
    ];
    const available = Object.keys(lucide);
    const missing = used.filter((n) => !available.includes(n));
    console.log("AVAILABLE_COUNT:", available.length);
    console.log("MISSING_COUNT:", missing.length);
    if (missing.length) console.log("MISSING:\n" + missing.join("\n"));
    else console.log("All icons are available");
  } catch (e) {
    console.error("ERROR", e.message || e);
    process.exit(1);
  }
})();
