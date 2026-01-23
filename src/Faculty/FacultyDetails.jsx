//displays faculty details

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { getFacultyId } from "../api/Details";

export default function FacultyDetails() {
