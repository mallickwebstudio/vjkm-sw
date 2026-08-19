import { Opportunity } from "@/types/opportunity";
import { sharedOpportunitiesData } from "./shared";

export const opportunitiesData: Opportunity[] = [
    {
        ...sharedOpportunitiesData["social-welfare-officer"],
        title: "Social Welfare Officer / CSR Executive",
        description: "Manages industrial funding deployment pipelines, maps baseline corporate social responsibility goals, and audits rural development metrics.",
    },
    {
        ...sharedOpportunitiesData["ngo-program-coordinator"],
        title: "NGO Program Coordinator",
        description: "Organizes ground-level humanitarian actions, structures donor funding requests, and directs regional crisis management field missions.",
    },
    {
        ...sharedOpportunitiesData["hr-manager-labor-welfare"],
        title: "HR Manager / Labor Welfare Officer",
        description: "Audits corporate factory floors for labor law compliance, resolves trade union operational deadlocks, and directs internal personnel welfare strategies.",
    },
    {
        ...sharedOpportunitiesData["psychiatric-social-worker"],
        title: "Psychiatric Social Worker / Counselor",
        description: "Delivers behavioral therapies within institutional mental health facilities, runs family crisis mediations, and evaluates addiction recovery protocols.",
    },
    {
        ...sharedOpportunitiesData["community-mobilizer"],
        title: "Community Mobilizer",
        description: "Coordinates rural group workshops to map resource deficits, gathering local demographic info and connecting cohorts to public sanitation networks.",
    },
    {
        ...sharedOpportunitiesData["youth-development-officer"],
        title: "Youth Development Officer",
        description: "Deploys targeted basic digital literacy tracks and vocational training sessions for rural adolescents inside community welfare facilities.",
    },
    {
        ...sharedOpportunitiesData["family-child-counselor"],
        title: "Family & Child Counselor",
        description: "Intervenes in domestic crisis occurrences, running behavioral evaluation sessions and drafting structural rehabilitation files for regional child protection desks.",
    },
    {
        ...sharedOpportunitiesData["medical-social-worker"],
        title: "Medical Social Worker",
        description: "Coordinates counseling plans within hospital settings, evaluating patient discharge requirements and connecting low-income profiles to state funding tracks.",
    },
    {
        ...sharedOpportunitiesData["rehabilitation-assistant-social"],
        title: "Rehabilitation Assistant",
        description: "Assists shelter house managers with client tracking steps, logging individual progress paths and verifying access to state nutritional allowances.",
    },
    {
        ...sharedOpportunitiesData["csr-project-director"],
        title: "CSR Project Director",
        description: "Authorizes enterprise corporate social responsibility budgets, monitoring large-scale rural infrastructure programs and submitting sustainability reports.",
    },
    {
        ...sharedOpportunitiesData["social-policy-analyst"],
        title: "Social Policy Analyst",
        description: "Evaluates community tracking indices and structural updates to write policy transformation briefs for national civic advisory groups.",
    },
];