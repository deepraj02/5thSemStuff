import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Dijkstra Demo',
      home: DijkstraDemo(),
    );
  }
}

class DijkstraDemo extends StatefulWidget {
  const DijkstraDemo({super.key});

  @override
  _DijkstraDemoState createState() => _DijkstraDemoState();
}

class _DijkstraDemoState extends State<DijkstraDemo> {
  List<List<int>> graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 0, 10, 0, 2, 0, 0],
    [0, 0, 0, 14, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
  ];

   List<bool> visited=[];
   List<int> distances=[];

  void dijkstra(int start) {
    distances = List.filled(graph.length, 5000);
    distances[start] = 0;
    visited = List.filled(graph.length, false);

    for (int i = 0; i < graph.length; i++) {
      int minDist = 5000;
      int minNode = 0;

      for (int j = 0; j < graph.length; j++) {
        if (!visited[j] && distances[j] < minDist) {
          minDist = distances[j];
          minNode = j;
        }
      }

      visited[minNode] = true;

      for (int j = 0; j < graph.length; j++) {
        if (graph[minNode][j] != 0 &&
            !visited[j] &&
            distances[minNode] != 5000 &&
            distances[minNode] + graph[minNode][j] < distances[j]) {
          distances[j] = distances[minNode] + graph[minNode][j];
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBar(
        title: const Text('Dijkstra\'s Algorithm'),
      ),
      body: Center(
        child: Container(
          padding: const EdgeInsets.all(20),
          height: 400,
          width: 400,
          color: Colors.white,
          child: CustomPaint(
            painter: MyGraphPainter(
              graph: graph,
              visited: visited,
              distances: distances,
            ),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.blueAccent,
        onPressed: () {
          dijkstra(0);
          setState(() {});
        },
        child: const Icon(Icons.play_arrow),
      ),
    );
  }
}

class MyGraphPainter extends CustomPainter {
  final List<List<int>> graph;
  final List<bool> visited;
  final List<int> distances;

  MyGraphPainter({
    required this.graph,
    required this.visited,
    required this.distances,
  });

  @override
  void paint(Canvas canvas, Size size) {
    const radius = 15.0;
    final paintNode = Paint()..color = Colors.blueAccent;
    final paintLine = Paint()
      ..color = Colors.black
      ..strokeCap = StrokeCap.round
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3;
    final paintText = TextPainter(
      textAlign: TextAlign.center,
      textDirection: TextDirection.ltr,
    );

    final nodeSpace = size.width / (graph.length + 1);

    for (int i = 0; i < graph.length; i++) {
      final x = (i + 1) * nodeSpace;
      final y = size.height / 2;

      canvas.drawCircle(Offset(x, y), radius, paintNode);
      paintText.text = TextSpan(
          text: '$i\n${distances[i]}', style: const TextStyle(fontSize: 12));
      paintText.layout();
      paintText.paint(canvas, Offset(x - paintText.width / 2, y - radius - 10));

      if (visited[i]) {
        canvas.drawCircle(
            Offset(x, y), radius + 4, Paint()..color = Colors.black26);
      }

      for (int j = 0; j < graph.length; j++) {
        if (graph[i][j] != 0) {
          final x1 = (i + 1) * nodeSpace;
          final y1 = size.height / 2;

          final x2 = (j + 1) * nodeSpace;
          final y2 = size.height / 2;

          canvas.drawLine(Offset(x1, y1), Offset(x2, y2), paintLine);
        }
      }
    }
  }

  @override
  bool shouldRepaint(MyGraphPainter old) {
    return true;
  }
}
