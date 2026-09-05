#!/usr/bin/env python3
"""Static server for local dev that mirrors GitHub Pages' clean-URL behavior:
a request for /services resolves to services.html if no exact match exists."""
import http.server
import os
import sys


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        fs_path = super().translate_path(path)
        if not os.path.exists(fs_path):
            candidate = fs_path + '.html'
            if os.path.isfile(candidate):
                return candidate
        return fs_path


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(project_root)
    http.server.test(HandlerClass=CleanURLHandler, port=port)
