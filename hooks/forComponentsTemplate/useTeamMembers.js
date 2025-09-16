// hooks/forComponentsTemplate/useTeamMembers.js
"use client";

import { useState, useEffect } from "react";
import teamMembersData from "@/constants/forTemplate2/TeamMemberData";

export function useTeamMembers() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Bisa disimulasikan fetch API kalau nanti datanya dari backend
    setTeamMembers(teamMembersData);
  }, []);

  return teamMembers;
}
