import { Component } from '@angular/core';
interface Project {
  title: string;
  shortDescription: string;
  details: string;
  isVisible: boolean; // To track visibility of the large box
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projects: Project[] = [
    {
      title: 'Project 1',
      shortDescription: 'Short description of Project 1.',
      details: 'Detailed information about Project 1, including goals, technologies used, and features.',
      isVisible: false,
    },
    {
      title: 'Project 2',
      shortDescription: 'Short description of Project 2.',
      details: 'Detailed information about Project 2, including goals, technologies used, and features.',
      isVisible: false,
    },
    {
      title: 'Project 3',
      shortDescription: 'Short description of Project 3.',
      details: 'Detailed information about Project 3, including goals, technologies used, and features.',
      isVisible: false,
    },
    // Add more projects as needed
  ];

  toggleLargeBox(project: Project) {
    project.isVisible = !project.isVisible; // Toggle visibility for the selected project
  }
}
