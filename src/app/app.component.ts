import { Component } from '@angular/core';
interface Project {
  title: string;
  shortDescription: string;
  details: string;
  isVisible: boolean; // To track visibility of the large box
  link: string; // Add this line to include the link property
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projects: Project[] = [
    {
      title: 'EPG - Electronic Payment Gateway',
      shortDescription: 'Comprehensive payment platform for secure online transactions.',
      details: `EPG is a next-generation payment platform developed by e& enterprise, designed to offer secure electronic payment services. The platform not only processes transactions but also provides management services for customers and transactions. It securely connects merchants (sellers of products or services) with banks and financial institutions to process transactions online. This application is being developed using Angular 14.`,
      isVisible: false,
      link: 'https://demo-ipg.ctdev.comtrust.ae/Dev_EPGPortal/index.html#/login', 
    },
    {
      title: 'MadinaLibrary',
      shortDescription: 'A digital library for borrowing and returning books.',
      details: `MadinaLibrary is a comprehensive digital library application that facilitates the borrowing and returning of books. The backend is powered by Firebase, ensuring seamless authentication and secure storage of user data and book information. All functionalities, including user registration, book borrowing, and returns, are fully implemented, providing an intuitive user experience. The design has been completed, making it easy for users to navigate through the library's resources.`,
      isVisible: false,
      link: 'https://madinalibrary-7ad63.web.app ', 
    },
    {
      title: 'PnoWorld',
      shortDescription: 'A village portal for accessing village-related services.',
      details: `PnoWorld is your one-stop destination for all village-related services, providing easy access to essential information and booking services. The project is currently in progress, with pending work to be completed. The backend is yet to be finalized, but the frontend development is underway, focusing on creating a user-friendly interface that connects users with various village services.`,
      isVisible: false,
      link: 'https://pnoworld.vercel.app/home', 
    },{
      title: 'Watch Display',
      shortDescription: 'An ASP.NET MVC project for displaying luxury watches.',
      details: `This project involves a watch display platform developed with Angular for the frontend and ASP.NET MVC for the backend. The application utilizes a MySQL database to manage watch information and user interactions. The frontend is designed to be responsive and user-friendly, ensuring that users can browse and view detailed information about various luxury watches.`,
      isVisible: false,
      link: 'null', 
    }
    // Add more projects as needed
  ];

  toggleLargeBox(project: Project) {
    project.isVisible = !project.isVisible; // Toggle visibility for the selected project
  }
}
