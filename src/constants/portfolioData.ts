import { PersonalInfo, Skill, Project, ExperienceItem, Certificate, Achievement, Statistic } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Kiran Yamanappa Alur',
  headline: 'Embedded Systems Engineer | FPGA Solutions | Edge AI | RTL Design | IoT Hardware',
  stream: 'Electronics and Communication Engineering Student',
  college: 'SDM College of Engineering and Technology (SDMCET), Dharwad',
  university: 'Visvesvaraya Technological University (VTU)',
  graduationYears: '2023–2027',
  location: 'Dharwad, Karnataka, India',
  email: 'kiranalur5@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  aboutBio: 'I am an Electronics and Communication Engineering student passionate about FPGA Design, Embedded Systems, RTL Design, Artificial Intelligence, Computer Vision, and modern software development. I enjoy solving real-world problems by combining hardware and software technologies.',
  careerObjective: 'To architect next-generation hardware-accelerated computing systems and silicon-level RTL designs, pushing the limits of real-time signal processing, Edge AI, and autonomous embedded devices.',
  journey: 'My journey began with curiosity about how integrated circuits transform binary pulses into real-world action. Entering SDMCET Dharwad under VTU allowed me to dive deep into Verilog RTL modeling, FPGA logic synthesis on Xilinx Vivado, custom BLE HID microcontrollers on ESP32, and high-level Python/C++ system modeling. Today, I build end-to-end hardware-software solutions that fuse deterministic digital design with intelligent edge processing.',
  futureGoals: [
    'Master advanced ASIC/FPGA physical design and SystemVerilog UVM verification methodologies.',
    'Build low-power Edge AI hardware accelerators for neural network inference on FPGAs.',
    'Contribute to open-source RISC-V processor cores and high-speed IoT connectivity protocols.',
    'Join a leading semiconductor or hardware innovation team (Apple, NVIDIA, Qualcomm, Intel, Texas Instruments, Synopsys, Cadence).'
  ],
  areasOfInterest: [
    'FPGA RTL Synthesis & Timing Closure',
    'Embedded Systems & Microcontroller Firmware (C/C++)',
    'Hardware Acceleration for Computer Vision',
    'Edge AI & TinyML Implementation',
    'Wireless Sensor Networks & BLE HID Protocols',
    'Digital Signal Processing & Image Differencing'
  ]
};

export const statistics: Statistic[] = [
  { label: 'Projects Engineered', value: 6, suffix: '', description: 'End-to-end hardware & web software systems' },
  { label: 'Certificates Earned', value: 5, suffix: '', description: 'Verified credentials in FPGA, Embedded, & AI' }
];

export const skills: Skill[] = [
  // Programming
  { name: 'Python (Basics)', category: 'Programming', level: 75, iconName: 'FaPython', tag: 'Scripting & AI Data Prep', description: 'Used for automation, testbench data parsing, and AI model preprocessing.' },
  { name: 'C++', category: 'Programming', level: 81, iconName: 'SiCplusplus', tag: 'Embedded Systems & OOP', description: 'High-performance firmware, data structures, and hardware interface programming.' },

  // Electronics & RTL
  { name: 'Verilog HDL', category: 'Electronics', level: 84, iconName: 'Cpu', tag: 'Digital RTL Design', description: 'FSM design, pipeline registers, BRAM interfacing, and synthesizable logic modules.' },
  { name: 'Embedded Systems', category: 'Electronics', level: 70, iconName: 'Microchip', tag: 'Firmware & Hardware', description: 'Microcontrollers, GPIO, interrupt service routines, UART, SPI, and I²C protocols.' },
  { name: 'FPGA Design', category: 'Electronics', level: 73, iconName: 'Zap', tag: 'Xilinx & Hardware Accel', description: 'Hardware acceleration, frame buffering, clock management, and timing constraints.' },
  { name: 'IoT (Internet of Things)', category: 'Electronics', level: 76, iconName: 'Radio', tag: 'Wireless Sensors & BLE', description: 'BLE HID, WiFi telemetry, MQTT protocol, sensor integration, and low-power nodes.' },
  { name: 'Arduino', category: 'Electronics', level: 90, iconName: 'SiArduino', tag: 'Rapid Prototyping', description: 'C++ microcontroller programming, sensor interfacing, and hardware debugging.' },
  { name: 'MATLAB', category: 'Electronics', level: 80, iconName: 'Activity', tag: 'Signal Analysis', description: 'Mathematical modeling, filter design, waveform analysis, and algorithmic validation.' },
  { name: 'Simulink', category: 'Electronics', level: 78, iconName: 'Layers', tag: 'System Simulation', description: 'Block diagram modeling of dynamic hardware systems and DSP controls.' },
  { name: 'Artificial Intelligence', category: 'Electronics', level: 76, iconName: 'Brain', tag: 'Edge AI & Computer Vision', description: 'TensorFlow Lite for microcontrollers, image thresholding, and object detection.' },
  { name: 'Vivado', category: 'Electronics', level: 88, iconName: 'Box', tag: 'Xilinx Logic Design', description: 'RTL synthesis, place-and-route, IP Catalog integration, and timing analysis.' },
  { name: 'QuestaSim', category: 'Electronics', level: 84, iconName: 'Terminal', tag: 'RTL Simulation', description: 'Waveform inspection, testbench generation, and timing simulation.' },

  // Tools
  { name: 'GitHub', category: 'Tools', level: 70, iconName: 'GitBranch', tag: 'Version Control', description: 'Collaborative development, branch management, CI/CD, and open source.' },
  { name: 'VS Code', category: 'Tools', level: 95, iconName: 'Code', tag: 'Primary IDE', description: 'Configured with C/C++, Verilog, Python extensions, and debugging tooling.' },
  { name: 'Arduino IDE', category: 'Tools', level: 92, iconName: 'Settings', tag: 'Firmware Development', description: 'ESP32/AVR board manager configuration, Serial Plotter, and library management.' },
  { name: 'Antigravity', category: 'Tools', level: 88, iconName: 'Sparkles', tag: 'AI Coding Assistant', description: 'Advanced AI pair programming, prompt engineering, and rapid application development.' },
  { name: 'Vitis Model Composer', category: 'Tools', level: 82, iconName: 'Cpu', tag: 'Xilinx DSP Toolset', description: 'Model-based design for FPGA hardware implementation from Simulink.' }
];

export const projects: Project[] = [
  {
    id: 'women-safety-system',
    title: 'Women Safety System',
    subtitle: 'Emergency Response & Women Safety Portal',
    category: 'Full-Stack & Web APIs',
    featured: true,
    description: 'Designed and engineered a high-reliability emergency reporting platform enabling rapid multi-modal incident reporting through live video, audio, voice notes, and text with real-time location capture and secure user authentication.',
    detailedDescription: 'The Women Safety System is an end-to-end emergency response ecosystem engineered for extreme reliability and swift action during distress situations. Featuring real-time GPS geolocation streaming, low-latency browser media capture APIs (video/audio recording), automated SOS distress triggers, and a multi-lingual portal supporting English and Kannada to reach diverse communities in Karnataka. It incorporates secure JWT authentication and encrypted data transport to ensure user privacy and reliable incident telemetry for emergency responders.',
    technologies: ['Full Stack Web Development', 'Geolocation API', 'Media Recording APIs', 'Authentication', 'English', 'Kannada'],
    highlights: [
      'Multi-modal incident capture (Live Video, Audio recording, Voice notes, Text)',
      'Real-time high-accuracy GPS Geolocation telemetry streaming',
      'Instant distress signal dispatch to emergency contacts',
      'Dual language localization (English & Kannada)',
      'Secure user authentication & encrypted emergency records storage'
    ],
    githubUrl: 'https://github.com/KiranAlur/Women-Safety-System',
    liveUrl: 'https://women-safety-portal.demo',
    metrics: [
      { label: 'Dispatch Latency', value: '< 800ms' },
      { label: 'Location Precision', value: 'High (GPS)' },
      { label: 'Localization', value: 'En / Kn' }
    ],
    codeSnippet: {
      language: 'javascript',
      filename: 'emergencyTelemetry.js',
      code: `// Multi-modal Emergency SOS Payload Dispatcher
export async function sendEmergencySignal(userAuthToken, mediaBlob) {
  const position = await getCurrentPositionHighAccuracy();
  const formData = new FormData();
  
  formData.append('latitude', position.coords.latitude);
  formData.append('longitude', position.coords.longitude);
  formData.append('accuracy', position.coords.accuracy);
  formData.append('timestamp', new Date().toISOString());
  formData.append('audioRecord', mediaBlob, 'distress_audio.webm');
  
  const response = await fetch('/api/v1/sos/trigger', {
    method: 'POST',
    headers: { 'Authorization': \`Bearer \${userAuthToken}\` },
    body: formData
  });
  
  return await response.json();
}`
    }
  },
  {
    id: 'esp32-air-mouse',
    title: 'ESP32 Motion-Controlled Air Mouse',
    subtitle: 'Gesture-Based Wireless BLE Mouse Emulation',
    category: 'Embedded Systems & BLE HID',
    featured: true,
    description: 'Developed an ultra-low latency gesture-driven air mouse using ESP32 microcontroller, MPU6050 6-axis IMU sensor, and BLE HID protocol for plug-and-play PC/laptop control.',
    detailedDescription: 'Engineered a standalone wireless motion cursor controller that emulates a native Bluetooth Low Energy (BLE) Human Interface Device (HID) mouse. Using an MPU6050 inertial measurement unit (3-axis accelerometer + 3-axis gyroscope), raw motion data is filtered using a complementary algorithm on the ESP32. This calculates precise pitch/roll angles mapped directly to OS cursor velocity. Physical micro-switches provide debounced left and right clicks, operating seamlessly without requiring any receiver dongles or custom drivers on Windows, macOS, or Linux.',
    technologies: ['ESP32', 'MPU6050', 'BLE HID', 'Arduino C++', 'I²C Protocol'],
    highlights: [
      'Native BLE Mouse Emulation (No custom receiver dongles needed)',
      'Plug and Play compatibility across Windows, macOS, Linux, Android',
      'Gesture-Based 2D Cursor Motion via complementary filtered MPU6050 IMU',
      'Real-time Sub-15ms Cursor Tracking & Dynamic Sensitivity Scaling',
      'Hardware Interrupt Debounced Left & Right Click Inputs',
      'Low Latency Wireless Communication with power-efficient BLE sleep modes'
    ],
    githubUrl: 'https://github.com/KiranAlur/ESP32-BLE-Air-Mouse',
    liveUrl: 'https://github.com/KiranAlur/ESP32-BLE-Air-Mouse#demo',
    metrics: [
      { label: 'Latency', value: '< 15 ms' },
      { label: 'Protocols', value: 'BLE HID & I²C' },
      { label: 'OS Support', value: 'Universal' }
    ],
    codeSnippet: {
      language: 'cpp',
      filename: 'esp32_air_mouse.ino',
      code: `#include <BleMouse.h>
#include <Wire.h>
#include <MPU6050.h>

BleMouse bleMouse("Kiran AirMouse", "SDMCET", 100);
MPU6050 mpu;

void setup() {
  Wire.begin(21, 22); // I2C SDA, SCL
  mpu.initialize();
  bleMouse.begin();
  pinMode(LEFT_CLICK_PIN, INPUT_PULLUP);
}

void loop() {
  if (bleMouse.isConnected()) {
    int16_t ax, ay, az, gx, gy, gz;
    mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
    
    int moveX = map(gy, -15000, 15000, -20, 20);
    int moveY = map(gx, -15000, 15000, -20, 20);
    
    bleMouse.move(moveX, moveY);
    handleDebouncedClicks();
  }
  delay(10); // ~100Hz updates
}`
    }
  },
  {
    id: 'fpga-moving-object-detection',
    title: 'FPGA Real-Time Moving Object Detection',
    subtitle: 'Hardware Accelerated Frame Differencing & Video Pipeline',
    category: 'FPGA & Verilog RTL',
    featured: true,
    description: 'Synthesized a hardware-accelerated computer vision architecture on FPGA for real-time moving object detection using Verilog HDL, frame differencing algorithms, dual-port BRAM buffers, and VGA/HDMI output.',
    detailedDescription: 'Architected a deterministic, pipelined digital hardware module designed to process incoming pixel streams in real time. Implemented on FPGA using Verilog HDL and simulated in Siemens QuestaSim, the design captures live video frames into Block RAM (BRAM), performs pixel-by-pixel temporal frame differencing, applies background subtraction with adaptive thresholding, and eliminates spatial noise. The processed binary foreground mask indicating motion is rendered directly to an external monitor via a custom VGA controller with synchronized horizontal and vertical timings.',
    technologies: ['FPGA', 'Verilog HDL', 'VHDL', 'QuestaSim', 'Image Processing', 'Frame Difference', 'Background Subtraction', 'VGA', 'HDMI'],
    highlights: [
      'Hardware Accelerated Image Processing bypassing CPU bottlenecks',
      'Real-Time Frame Differencing pipeline operating at 60 FPS pixel clock',
      'Adaptive Background Subtraction and Dynamic Thresholding modules',
      'Spatial Noise Suppression via morphological filtering',
      'Dual-Port BRAM Frame Buffer architecture for simultaneous write/read',
      'VGA & HDMI Synchronization Generator (640x480 @ 60Hz timing closure)'
    ],
    githubUrl: 'https://github.com/KiranAlur/FPGA-Moving-Object-Detection',
    liveUrl: 'https://github.com/KiranAlur/FPGA-Moving-Object-Detection#simulation',
    metrics: [
      { label: 'Processing Speed', value: '60 FPS Pixel Clock' },
      { label: 'RTL Simulation', value: 'QuestaSim' },
      { label: 'Hardware Buffer', value: 'Xilinx BRAM' }
    ],
    codeSnippet: {
      language: 'verilog',
      filename: 'frame_difference_engine.v',
      code: `module frame_difference_engine (
    input wire clk,
    input wire rst,
    input wire [7:0] current_pixel,
    input wire [7:0] prev_pixel,
    input wire [7:0] threshold,
    output reg motion_detected,
    output reg [7:0] diff_out
);
    reg [7:0] abs_diff;

    always @(posedge clk or posedge rst) begin
        if (rst) begin
            abs_diff        <= 8'd0;
            diff_out        <= 8'd0;
            motion_detected <= 1'b0;
        end else begin
            // Compute absolute difference in single clock cycle
            if (current_pixel >= prev_pixel)
                abs_diff <= current_pixel - prev_pixel;
            else
                abs_diff <= prev_pixel - current_pixel;

            // Thresholding logic
            if (abs_diff > threshold) begin
                motion_detected <= 1'b1;
                diff_out        <= 8'hFF; // White highlight
            end else begin
                motion_detected <= 1'b0;
                diff_out        <= 8'h00; // Black background
            end
        end
    end
endmodule`
    }
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'ece-lab-research',
    role: 'FPGA & Embedded Systems Student Researcher',
    organization: 'SDM College of Engineering and Technology (SDMCET), Dharwad',
    period: '2024 – Present',
    location: 'Dharwad, Karnataka',
    type: 'Research',
    icon: 'Cpu',
    description: [
      'Synthesized and tested custom Verilog RTL modules on Xilinx Artix-7/Spartan-6 FPGA boards.',
      'Designed hardware testbenches in QuestaSim to verify timing compliance and state machine transitions.',
      'Integrated sensor arrays with microcontrollers over I2C, SPI, and UART protocols for real-time telemetry.'
    ],
    skillsUsed: ['Verilog HDL', 'FPGA', 'Vivado', 'QuestaSim', 'Embedded Systems']
  }
];

export const certificates: Certificate[] = [
  {
    id: 'cert-vlsi-digital-design',
@@ -256,9 +7,16 @@ export const certificates: Certificate[] = [
    credentialId: 'INFOSYS-VLSI-2026',
    verificationUrl: 'https://verify.onwingspan.com',
    fileUrl: '/certificates/VLSI Digital Design.pdf',
    skills: ['Chip Design', 'Verilog Programming', 'RTL Design', 'Digital Logic', 'VLSI Architecture'],
    skills: [
      'Chip Design',
      'Verilog Programming',
      'RTL Design',
      'Digital Logic',
      'VLSI Architecture'
    ],
    badgeColor: 'from-cyan-500 to-blue-600'
  },

  {
    id: 'cert-digital-electronics',
    title: 'Digital Electronics',
@@ -267,9 +25,16 @@ export const certificates: Certificate[] = [
    credentialId: 'INFOSYS-DE-2026',
    verificationUrl: 'https://verify.onwingspan.com',
    fileUrl: '/certificates/Digital_Electronics.pdf',
    skills: ['Digital Electronics', 'Logic Gates', 'Combinational Circuits', 'Sequential Logic', 'FSM'],
    skills: [
      'Digital Electronics',
      'Logic Gates',
      'Combinational Circuits',
      'Sequential Logic',
      'FSM'
    ],
    badgeColor: 'from-purple-500 to-indigo-600'
  },

  {
    id: 'cert-basics-of-python',
    title: 'Basics Of Python',
@@ -278,9 +43,16 @@ export const certificates: Certificate[] = [
    credentialId: 'INFOSYS-PY-2026',
    verificationUrl: 'https://verify.onwingspan.com',
    fileUrl: '/certificates/Basics Of Python.pdf',
    skills: ['Python Basics', 'Scripting', 'VLSI Systems', 'Data Structures', 'Hardware Modeling'],
    skills: [
      'Python Basics',
      'Scripting',
      'VLSI Systems',
      'Data Structures',
      'Hardware Modeling'
    ],
    badgeColor: 'from-emerald-500 to-teal-600'
  },

  {
    id: 'cert-programming-in-c',
    title: 'Programming in C',
@@ -289,9 +61,16 @@ export const certificates: Certificate[] = [
    credentialId: 'INFOSYS-C-2026',
    verificationUrl: 'https://verify.onwingspan.com',
    fileUrl: '/certificates/Programming in C.pdf',
    skills: ['C Programming', 'Pointers', 'Memory Management', 'Data Structures', 'Embedded C'],
    skills: [
      'C Programming',
      'Pointers',
      'Memory Management',
      'Data Structures',
      'Embedded C'
    ],
    badgeColor: 'from-amber-500 to-orange-600'
  },

  {
    id: 'cert-python-essentials',
    title: 'Python Essentials',
@@ -300,40 +79,12 @@ export const certificates: Certificate[] = [
    credentialId: 'CISCO-PYESS-2026',
    verificationUrl: 'https://www.netacad.com',
    fileUrl: '/certificates/python_essentials.pdf',
    skills: ['Python Programming', 'Data Preprocessing', 'Object-Oriented Programming', 'Scripting & AI Tools'],
    skills: [
      'Python Programming',
      'Data Preprocessing',
      'Object-Oriented Programming',
      'Scripting & AI Tools'
    ],
    badgeColor: 'from-blue-500 to-cyan-600'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'ach-fpga-innovation',
    title: 'Top Hardware Innovation Award',
    event: 'National ECE Hardware Hackathon / SDMCET TechFest',
    date: '2024',
    position: '1st Place',
    category: 'Hackathon',
    description: 'Awarded 1st place for designing and synthesizing the FPGA-Based Moving Object Detection system with 60 FPS real-time VGA output.',
    stats: '1st / 45 Teams'
  },
  {
    id: 'ach-vtu-academic',
    title: 'Academic Excellence in Digital System Design',
    event: 'SDM College of Engineering & Technology (VTU)',
    date: '2023–2024',
    position: 'Merit List',
    category: 'Award',
    description: 'Recognized for outstanding academic performance and high distinction in Verilog HDL, Microcontrollers, and Digital Signal Processing.',
    stats: 'Top Percentile'
  },
  {
    id: 'ach-iot-air-mouse',
    title: 'Best Embedded IoT Prototype',
    event: 'VTU Regional Innovation Showcase',
    date: '2024',
    position: 'Finalist & Special Mention',
    category: 'Competition',
    description: 'Demonstrated the ESP32 BLE HID Air Mouse with sub-15ms gesture responsiveness, earning praise from industry judges.',
    stats: 'Top 5 Finalist'
  }
];
