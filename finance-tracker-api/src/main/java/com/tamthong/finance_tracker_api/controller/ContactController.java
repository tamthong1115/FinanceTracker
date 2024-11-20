package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.ContactDTO;
import com.tamthong.finance_tracker_api.dto.ContactResponseDTO;
import com.tamthong.finance_tracker_api.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {
    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ContactResponseDTO> createContact(@Valid @RequestBody ContactDTO contactDTO) {
        contactService.createContact(contactDTO);
        return ResponseEntity.ok(ContactResponseDTO.builder()
            .success(true)
            .message("Message sent successfully")
            .build());
    }
}
